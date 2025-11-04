#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  set -e
  if [ -f ~/.huskyrc ]; then
    . ~/.huskyrc
  fi
  husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
  exitCode=$?
  unset husky_skip_init
  exit $exitCode
fi
