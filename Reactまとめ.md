## React�܂Ƃ�
***

### import�Aexprort
- �֐��R���|�[�l���g���ł��A�N���X�R���|�[�l���g�ł�
�ȉ��̂悤�ɋL�q����
```javascript
import React from 'react'
|
|
exprot default �֐��� / �N���X��
```
- ���́uimport React from 'react';�v���Ȃ��Ă�����
- ������import�������ꍇ�͖��O�t��export,import���g��

### props
- \<hogehoge oreore={i}/>�݂����ɓn��
hogehoge�̓R���|�[�l���g���Aoreore��props�̗v�f��
- ���o���Ƃ��́Aprops.oreore
- �����������Ȃ�

### state
- �K���R���X�g���N�^�ɋL�q
hoge��state�̗v�f��
```javascript
constructor (props) {
    super(props);
    this.state = {
        hoge: nanika
    }
}
```
- �ύX����Ƃ��́Athis.setState({hoge: nanika2})
setState����ۂɂ�2�ȏ�w�肷�邱�Ƃ��ł���

- ���o���Ƃ��́Athis.state.hoge

### onClick
- �{�^���N���b�N�Ŋ֐��̏������s�����Ƃ��ł���
```javascript
  render() {
    const checkEvent = () => {
        ����
      });
    };

    return (
      <button className="square" onClick={checkEvent}>
        |
      </button>
    );
  }
```
- checkEvent()�Ɠn���Ɩ��������_�[�ɂȂ�̂ŁANG
- ���s����ۂ̈����ɂ͊֐���p����K�v������

### �֐������ɂ���
- �����R���|�[�l���g�����Q�Ƃ���ۂ́A�uthis.�֐����v�ƎQ�Ƃ���
- �R���|�[�l���g���̓����֐��̒��̏ꍇ�Ȃ�u�֐����v�ƎQ�Ƃ���

### �֐��R���|�[�l���g�ɂ���
- ���͊֐��R���|�[�l���g���嗬
  - Hooks���g����this���g��Ȃ��čς�
  - constructor�Arender���s�v�ɂȂ�
- �֐��R���|�[�l���g�̒��̊֐���const�Œ�`����
- �֐��R���|�[�l���g��props��n���Ƃ��́u{}�v���g���A�\��������

### useState
- �g������state�Ɠ���
```javascript
const [�v���p�e�B��, state��ύX���郁�\�b�h��] = useState(�����l);
```
- �O�̏�Ԃ�\��prevState���g���ƃo�O���N���ɂ���
- �z���useState�ɓ��ꂽ���ꍇ��useState([])�Ƃ���
- useState�̔z��ɒǉ��������ꍇ�́u...�v�X�v���b�h�\����p����

### useEffect
- ��{�͈ȉ��̌`
���̌`���ƃv���p�e�B���̒l���ύX����鎞�A�ŏ��̃����_�����O���Ɏ��s����
- ����������ɂ���ƁARender���Ɏ��s����
- �������ɋ�z��u[]�v��n���ƁA�ŏ��̃����_�����O���̂ݎ��s����
- useEffect����return����ƃN���[���A�b�v�ɂȂ�

```javascript
useEffect(() => {
  ����
}, [�v���p�e�B��]);
```

### useCallback
```javascript
const callback = useCallback(�֐�, [deps])
```

### useMemo
- �L���b�V���̂悤�Ȃ��́A�p�t�H�[�}���X���P�Ɏg����
```javascript
useMemo(() => �l���v�Z���郍�W�b�N, �ˑ��z��);
```


### ���̑�
- .js�A.jsx�͂��Ƃ�jsx���g���ď�����Ă��Ă��ǂ���ł����s�\�A�ŋ߂̃g�����h�Ƃ���.jsx�̕��������I�B
�icreate-react-app�ō쐬�����ꍇ��.js�̂܂܂ł���j
- return����img�Ȃǂ͕��^�O�u/>�v���K�v
- return����\<div>�̑����<></>�̋�^�O���g����
- map�̃R�[���o�b�N�֐��ł͈ȉ��̈���������
    - value�F�z��̒l
    - index�F�C���f�b�N�X�ԍ�
    - array�F���ݏ������Ă���z��
```javascript
�z��f�[�^.map( function(value, index, array)){

});
```
- �R���|�[�l���g�̋L�q�ɂ�����u{}�v�Ɓu()�v�̈Ⴂ
�u()�v��return���ȗ��ł���ireturn�����łɋL�q���ꂽ��ԁj
�u{}�v��return�������ŏ����̂ŁA�ϐ��Ȃǂ���`�ł���

***
## Typescript
***
### ��{
- React.FC��React.VFC�͎g��Ȃ��Ă悢
�ÖٓI��() => JSX.Element�ŕԂ��Ă���
- �C�x���g�n���h���[�̌^�̓J�[�\�������킹�Ē��ׂ���

### useState
- typescript��useState�ɔz�������ꍇ�͈ȉ��̂悤�ɂ���
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


