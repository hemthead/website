sync() {
  rsync --archive -hh --partial --info=stats1,progress2 --modify-window=1 "$@"
} 

sync-site-to() {
    sync ./_site/ "$@"
}
