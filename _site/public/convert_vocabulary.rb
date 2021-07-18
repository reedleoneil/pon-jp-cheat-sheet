def file_append (line)
    File.open("vocabulary-n5.yml", "a"){|f| f.puts(line)}
end

(1..20).each do |x|
    File.foreach("D:/pon-jp-cheat-sheet/cheat-sheet/vocabulary/n5/set-" + x.to_s + ".markdown") do |line, line_no| 
        if line.include?("|") && !line.include?("| 漢字") && !line.include?("---")
            l = line.split("|")
            file_append "-"
            file_append "  kanji: " + l[1].strip
            file_append "  kana: " + l[2].strip
            file_append "  meaning: " + l[3].strip
        end
    end
end