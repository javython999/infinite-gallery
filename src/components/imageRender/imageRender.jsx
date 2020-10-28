import React, { useRef, useState } from 'react';
import styles from './imageRender.module.css';


const ImageRender = (props) => {  
  const [url, setUrl] = useState(props.url);
  const inputRef = useRef();

  // 이미지 클릭시 새로고침
  const refresh = () => {
    if(inputRef.current.value === ''){
      // 검색 키워드가 없을 때
      setUrl([props.url]);
      console.log(url);
    } else {
      // 검색 키워드가 있을 때
      setUrl([`https://source.unsplash.com/featured/?${inputRef.current.value}`]);
    }
  }

  // 검색어 입력후 Enter키 입력시
  const handleRefresh = (event) => {
    if(event.key !== 'Enter') {
      return
    } else {
      refresh();
    }
  }
  return(
    <div className={styles.div} >
      <img className={styles.img} onClick={refresh} src={url} alt='img'/>
      <section>
        <input 
          className={styles.input}
          ref={inputRef}
          type='text'
          placeholder='검색(영어로 입력하세요).'
          onKeyPress={handleRefresh}
        />
        <input 
          type='button'
          onClick={refresh} value='검색'>
        </input>
      </section>
      <p>
      새로운 이미지 로딩은 10초간격으로 가능합니다.
      이미지의 화질에 따라 로딩시간이 길어질 수 있습니다.
      </p>
    </div>
  )
};

export default ImageRender;