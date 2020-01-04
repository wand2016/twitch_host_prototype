@startuml
class 配信者

class 予約者

class 管理者

配信者 -- 予約者 : "同一人物を想定"

package システム {
   
  class Googleカレンダー
   
  class 配信ホスト予約 {
    配信者twitchアカウント
    開始日時
    終了日時
    更新日時
  }
   
  Googleカレンダー "1" o-- "*" 配信ホスト予約
   
   
  class 配信ホスト
  class システムtwitchアカウント

  システムtwitchアカウント -- 配信ホスト

  class 定期実行モジュール

  定期実行モジュール --> Googleカレンダー
  定期実行モジュール --> "0..1" 配信ホスト予約
  定期実行モジュール ..> 配信ホスト : "<<create>>"
}

class 配信者twitchアカウント

配信者 o-- 配信者twitchアカウント
配信ホスト -- 配信者twitchアカウント
配信ホスト -- 配信ホスト予約
   
予約者 --> Googleカレンダー
予約者 ..> 配信ホスト予約 : "<<create>>"
管理者 --> Googleカレンダー
管理者 o-- システムtwitchアカウント
@enduml
