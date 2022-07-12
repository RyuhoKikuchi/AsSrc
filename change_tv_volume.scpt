on run {input, parameters}
    tell application "TV"
        set sound volume to input
    end tell
    return input
end run
