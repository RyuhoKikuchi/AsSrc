on run argv
    tell application "Finder"
        -- alias file
        -- folder
        if (item 1 of argv) is "a" then
            set targetFile to alias file (item 2 of argv) of desktop
        else if (item 1 of argv) is "f" then
            set targetFile to folder (item 2 of argv) of desktop
        end if
        set desktop position of targetFile to {(item 3 of argv), (item 4 of argv)}
    end tell
end run