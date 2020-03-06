class PigLatin
  def self.translate(word)
    # vowels = ['a', 'e', 'i', 'o', 'u']
    if word.start_with? 'a', 'A', 'e', 'E'
      word + "ay"
    elsif word.start_with? 'p', 'P'
      word.slice!(0)
      word + 'pay'
    elsif word.start_with? 'k', 'K'
      word.slice!(0)
      word + 'kay'
    elsif word.start_with? 'ch', 'Ch'
      word.slice!(0..1)
      word + 'chay'
    elsif word.start_with? 'qu', 'Qu'
      word.slice!(0..1)
      word + 'quay'
    elsif word.include? 'qu'
      word.slice!(0..2)
      word + 'squay'
    elsif word.start_with? 'th', 'Th'
      word.slice!(0..1)
      word + 'thay'
    elsif word.start_with? 'thr'
      word.slice!(0..3)
      word + 'thray'
    elsif word.start_with? 'sch', 'Sch'
      word.slice!(0..2)
      word + 'schay'
    end
  end
end
