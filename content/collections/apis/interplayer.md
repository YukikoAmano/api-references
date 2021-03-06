---
title: プレイヤー間通信の有効化
slug: interplayer
description: 特定のプレイヤー間でデータをやり取りできるAPIに必要なプレイヤー間通信の有効化について
order: 1
navi: 機能解説
---
    
## 概要
一部のRPGアツマール ゲームAPIは、ゲームをプレイしているユーザーとは別のユーザーの情報を取得することができます。 そのようなAPIは、本ページで説明する 「プレイヤー間通信の有効化」 情報を取得される相手ユーザーが行っている場合のみ、情報の取得が可能です。
  
知らないうちに他人から情報を参照されたり、シグナルを送られたりしてしまわないよう、このような仕組みとなっています。
  
プレイヤー間通信の有効化は、ユーザーそれぞれがゲームごとに設定できる値です。あるゲームで通信が有効化されているユーザーでも、別のゲームでは改めて有効化しないとそのゲームではそのユーザーの情報に、他のユーザーがアクセスすることはできません。
    
## 呼び出しに有効化が必要なAPI
次の相手ユーザーの情報を利用するAPIは、利用の際に相手ユーザーの「プレイヤー間通信の有効化」がされている必要があります。有効化されていないユーザーに対してこれらのAPIを呼び出した場合、 [FORBIDDEN](/documents/error) エラーとなります。
 - [ユーザー情報取得API](/user) のうち「ユーザーIDを指定して特定のユーザー情報を取得」
 - [シグナル送信API](/signal) のうち「ユーザーシグナルの送信」
    
## 有効化されていない場合に結果が変化するAPI
次の相手ユーザーの情報を利用するAPIは、プレイヤーの有効化状態によって結果が変化します。
 - [共有セーブ](shared-save)
    - 引数に有効化されていないユーザーIDを含めた場合、そのユーザーのぶんのデータは取得できません。
 - [ユーザー情報取得](user)
    - 有効化されているユーザーのリストが取得できます。
    
## 利用方法

方式|利用方法|備考
:---|:---|:---
プラグイン|プラグインでの利用方法の「[プレイヤー間通信の有効化](/plugins/interplayer)」項を参考に、APIを実装してください|RPGツクールMVユーザー向け
API|APIでの利用方法の「[プレイヤー間通信の有効化](/apis/interplayer)」項を参考に、APIを実装してください|他ゲームエンジンやより高度な利用を必要とするユーザー向け

    
## 最終更新日
 - 2020/02/28
