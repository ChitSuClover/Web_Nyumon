class Player
  def hand
    puts "数字を入力してください"
    puts "0：グー、１：チョキ、２：パー"
    input_hand=gets.to_i
    i=0
    while i<=2
      if input_hand==0 || input_hand==1 || input_hand==0
        return input_hand
      else
        puts "もう一度数字を入力してください。"
        puts "0：グー、１：チョキ、２：パー"
        input_hand=gets.to_i
      end
      i+=1
    end
  end
end
class Enemy
  def hand
    enemy_hand=rand(0..2)
    return enemy_hand
  end
end

class Janken
  def pon(player_hand, enemy_hand)
    janken=["グー", "チョキ", "パー"]
    puts "相手の手は#{janken[enemy_hand]}です。"
    if player_hand==enemy_hand
      puts "あいこ"
      return Action.jankenpon
    elsif (player_hand == 0 && enemy_hand == 1) || (player_hand == 1 && enemy_hand == 2) || (player_hand == 2 && enemy_hand == 0)
      puts "あなたの勝ちです"
    else
      puts "あなたの負けです"
    end
  end
end

class Action
  def self.jankenpon
    player=Player.new
    enemy=Enemy.new
    janken=Janken.new
    next_game=true
    while next_game
      next_game=janken.pon(player.hand,enemy.hand)
      if next_game==false
      end
    end
  end
end
Action.jankenpon
