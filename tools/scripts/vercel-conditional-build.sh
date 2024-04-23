#!/bin/bash

PROJECT_NAME=$1

echo "⭐️ PROJECT NAME: $PROJECT_NAME"
echo "⭐️ GIT BRANCH: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "preview" || "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  # Proceed with the build
  echo "✅ - Build requested on approved branch"
  
  # Run nx-ignore with the project name
  npx nx-ignore $PROJECT_NAME
   
  # Check the exit status of the last command
  if [[ $? -eq 0 ]]; then
    exit 0;
  else
    echo "✅ - Build approved by nx-ignore"
    exit 1;
  fi

else
  # Don't build
  echo "🛑 - Build cancelled. Deployment builds will only process on preview and main branches."
  exit 0;
fi