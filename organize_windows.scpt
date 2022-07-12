on run {input, parameters}
    tell application "System Events"
        repeat with theProcess in processes
            if background only of theProcess is false then
                set pcName to name of theProcess
                if pcName is not "TV" and pcName is not "NordVPN" then
                    tell theProcess
                        set frontmost to true
                    end tell
                end if
            end if
        end repeat
    end tell
    return input
end run
