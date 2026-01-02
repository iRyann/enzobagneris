import { useCallback, useState, type ReactNode } from 'react';
import { Download } from 'lucide-react';
import { Button, type ButtonProps } from './Button';
import { cn } from '@/lib/utils';

export interface SecureDownloadConfig {
  path: string;
  fileName: string;
  mimeType: string;
  maxBytes: number;
  timeoutMs?: number;
}

export interface SecureDownloadButtonProps
  extends Omit<ButtonProps, 'onClick'> {
  download: SecureDownloadConfig;
  label: string;
  loadingLabel?: string;
  errorMessage?: string;
  wrapperClassName?: string;
  errorClassName?: string;
  icon?: ReactNode;
}

const DEFAULT_TIMEOUT_MS = 15000;

export function SecureDownloadButton({
  download,
  label,
  loadingLabel = 'Telechargement...',
  errorMessage = "Le fichier n'est pas disponible pour le moment.",
  wrapperClassName,
  errorClassName,
  icon = <Download size={16} />,
  className,
  disabled,
  ...props
}: SecureDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleDownload = useCallback(async () => {
    if (isDownloading) {
      return;
    }

    setIsDownloading(true);
    setDownloadError(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      download.timeoutMs ?? DEFAULT_TIMEOUT_MS
    );

    try {
      const url = new URL(download.path, window.location.origin);
      if (url.origin !== window.location.origin) {
        throw new Error('download-origin');
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        cache: 'no-store',
        credentials: 'same-origin',
        mode: 'same-origin',
        redirect: 'error',
        referrerPolicy: 'no-referrer',
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error('download-response');
      }

      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.includes(download.mimeType)) {
        throw new Error('download-type');
      }

      const contentLength = Number(response.headers.get('content-length') ?? 0);
      if (contentLength && contentLength > download.maxBytes) {
        throw new Error('download-size');
      }

      const blob = await response.blob();
      if (
        (blob.type && !blob.type.includes(download.mimeType)) ||
        blob.size > download.maxBytes
      ) {
        throw new Error('download-blob');
      }

      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = objectUrl;
      anchor.download = download.fileName;
      anchor.rel = 'noopener';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      setDownloadError(errorMessage);
    } finally {
      window.clearTimeout(timeoutId);
      setIsDownloading(false);
    }
  }, [download, errorMessage, isDownloading]);

  return (
    <div
      className={cn(
        'flex flex-col items-center md:items-start gap-2',
        wrapperClassName
      )}
    >
      <Button
        type="button"
        onClick={handleDownload}
        aria-busy={isDownloading}
        disabled={disabled || isDownloading}
        className={className}
        {...props}
      >
        {icon} {isDownloading ? loadingLabel : label}
      </Button>
      {downloadError && (
        <p role="alert" className={cn('text-sm text-nature-soft font-serif', errorClassName)}>
          {downloadError}
        </p>
      )}
    </div>
  );
}
