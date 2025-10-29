#!/bin/bash
#
TOOL="../../../bin/aprep.sh"
DEST1="../../02_Exercises/01-Exercise-App/"
DEST2=${DEST1}"movies/"

declare -a dirArr=(${DEST1} ${DEST2})
for dir in "${dirArr[@]}"
do
  if [ ! -d ${dir} ]
  then
    echo "Create directory ${dir}, because it does not exist!"
    mkdir -p ${dir}
  fi
done

"$TOOL" -p "$DEST1" -f "Readme.md"

declare -a scriptArr=('main' 'db.config')
## now loop through the above array
for s in "${scriptArr[@]}"
do
   skript="${s}.js"
   echo "Preparing $skript ..."
   "$TOOL" -p "$DEST1" -j "$skript"
done

"$TOOL" -p "$DEST2" -j "movies/model.js"
"$TOOL" -p "$DEST2" -j "movies/schema.js"

