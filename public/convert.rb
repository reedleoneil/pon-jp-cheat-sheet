is_meaning = false

def file_append (line)
    File.open("kanji-n3.yml", "a"){|f| f.puts(line)}
end

(1..9).each do |x|
    File.foreach("D:/pon-jp-cheat-sheet/cheat-sheet/kanji/n3/set-" + x.to_s + ".markdown") do |line, line_no| 
        if line.include?("# ") && line.include?("<ruby>") == false
            file_append "-" # write - kanji: 
            file_append "  kanji: " + line.delete("#").strip
            is_meaning = true
        elsif is_meaning
            is_meaning = false
            file_append "  meaning: " + line.strip
            file_append "  vocabulary: "
        elsif line.include?("|")
            l = line.split("|")
            file_append "    -"
            file_append "      kanji: " + l[1].strip
            file_append "      kana: " + l[2].strip
            file_append "      meaning: " + l[3].strip
        end
    end
end