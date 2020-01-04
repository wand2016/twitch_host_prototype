@startuml
class 配信者

class 予約者

class 管理者

配信者 -r- 予約者 : "同一人物を想定"

package システム {
   
  class Googleカレンダー
   
  class 配信ホスト予約 {
    配信者twitchアカウント
    開始日時
    終了日時
    更新日時
  }
   
  Googleカレンダー "1" o-- "*" 配信ホスト予約
   
   
   
  class 配信ホスト {
    管理者twtichアカウント
    配信者twitchアカウント
  }
}

   
配信ホスト -- 配信ホスト予約
   
予約者 --> Googleカレンダー
管理者 --> Googleカレンダー
@enduml
