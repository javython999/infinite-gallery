import React, { useState } from 'react';
import styles from './imageRender.module.css';






const ImageRender = (props) => {  
  const [url, setUrl] = useState(props.url);

  // 이미지 클릭시 새로고침
  const refresh = () => {
    setUrl([url]);
  }

  return(
    <div className={styles.div} >
      <img className={styles.img} onClick={refresh} src={url} alt='img'/>
      <h4>이미지 클릭시 새로운 이미지가 나옵니다.</h4>
      <h4>새로운 이미지 로딩은 10초간격으로 가능합니다.</h4>
    </div>
  )
};

export default ImageRender;