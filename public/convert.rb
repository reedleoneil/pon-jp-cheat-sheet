is_meaning = false

File.foreach("D:/pon-jp-cheat-sheet/cheat-sheet/kanji/n3/set-1.markdown") do |line, line_no| 
    if line.include?("# ") && line.include?("<ruby>") == false
        puts "-" # write - kanji: 
        puts "  kanji: " + line.delete("#").strip
        is_meaning = true
    elsif is_meaning
        puts "  meaning: " + line.strip
        is_meaning = false
        puts "  onyomi: "
    elsif line.include?("|")
        l = line.split("|")
        puts "    -"
        puts "      kanji: " + l[0].strip
        puts "      kana: " + l[1].strip
        puts "      meaning: " + l[2].strip
    end
end