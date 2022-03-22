## Reactまとめ
***

### import、exprort
- 関数コンポーネント内でも、クラスコンポーネントでも
以下のように記述する
```javascript
import React from 'react'
|
|
exprot default 関数名 / クラス名
```
- 今は「import React from 'react';」がなくても動く
- 複数のimportしたい場合は名前付きexport,importを使う

### props
- \<hogehoge oreore={i}/>みたいに渡す
hogehogeはコンポーネント名、oreoreはpropsの要素名
- 取り出すときは、props.oreore
- 書き換えられない

### state
- 必ずコンストラクタに記述
hogeがstateの要素名
```javascript
constructor (props) {
    super(props);
    this.state = {
        hoge: nanika
    }
}
```
- 変更するときは、this.setState({hoge: nanika2})
setStateする際には2つ以上指定することもできる

- 取り出すときは、this.state.hoge

### onClick
- ボタンクリックで関数の処理を行うことができる
```javascript
  render() {
    const checkEvent = () => {
        処理
      });
    };

    return (
      <button className="square" onClick={checkEvent}>
        |
      </button>
    );
  }
```
- checkEvent()と渡すと無限レンダーになるので、NG
- 実行する際の引数には関数を用いる必要がある

### 関数処理について
- 同じコンポーネント内を参照する際は、「this.関数名」と参照する
- コンポーネント内の同じ関数の中の場合なら「関数名」と参照する

### 関数コンポーネントについて
- 今は関数コンポーネントが主流
  - Hooksを使うとthisを使わなくて済む
  - constructor、renderが不要になる
- 関数コンポーネントの中の関数はconstで定義する
- 関数コンポーネントにpropsを渡すときは「{}」を使い、構造化する

### useState
- 使い方はstateと同じ
```javascript
const [プロパティ名, stateを変更するメソッド名] = useState(初期値);
```
- 前の状態を表すprevStateを使うとバグが起きにくい
- 配列をuseStateに入れたい場合はuseState([])とする
- useStateの配列に追加したい場合は「...」スプレッド構文を用いる

### useEffect
- 基本は以下の形
この形だとプロパティ名の値が変更される時、最初のレンダリング時に実行する
- 第二引数を空にすると、Render毎に実行する
- 第二引数に空配列「[]」を渡すと、最初のレンダリング時のみ実行する
- useEffect内でreturnするとクリーンアップになる

```javascript
useEffect(() => {
  処理
}, [プロパティ名]);
```

### useCallback
```javascript
const callback = useCallback(関数, [deps])
```

### useMemo
- キャッシュのようなもの、パフォーマンス改善に使える
```javascript
useMemo(() => 値を計算するロジック, 依存配列);
```


### その他
- .js、.jsxはたとえjsxを使って書かれていてもどちらでも実行可能、最近のトレンドとして.jsxの方が明示的。
（create-react-appで作成した場合は.jsのままである）
- return内のimgなどは閉じタグ「/>」が必要
- return内で\<div>の代わりに<></>の空タグも使える
- mapのコールバック関数では以下の引数がある
    - value：配列の値
    - index：インデックス番号
    - array：現在処理している配列
```javascript
配列データ.map( function(value, index, array)){

});
```
- コンポーネントの記述における「{}」と「()」の違い
「()」はreturnを省略できる（returnがすでに記述された状態）
「{}」はreturnを自分で書くので、変数なども定義できる

***
## Typescript
***
### 基本
- React.FCとReact.VFCは使わなくてよい
暗黙的に() => JSX.Elementで返ってくる
- イベントハンドラーの型はカーソルをあわせて調べられる

### useState
- typescriptでuseStateに配列を入れる場合は以下のようにする
```typescript
interface Todo {
    task: string,
    isCompleted: boolean,
}

    const [todos, setTodos] = useState<Todo[]>([]);

    {todos.map((todo: Todo, index: number) => {
      return (
          <li key={index}>
              {todo.task}
          </li>
      );
    })}
```


