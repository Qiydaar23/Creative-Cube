import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';


export default function Gallery() {

  const cloudinaryRef = useRef();
  const videoRef = useRef();

  const data = [
    {
      id: 1,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-3613938497678337015&th=188546b936736452&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9lXQ9X4uMObfYAfXVR4Vq9inHK0NipHsFZCnTH3mRbBeWMfK9FY2Op4fBRg6SSAHau-2b1zcZRxbaDF_SK7b6fOMp0o-PpIRahNF9ruy2_2narCK2SqIfkTG8&disp=emb&realattid=188546b8083e4e019f71",
    },
    {
      id: 2,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r8811574902451362280&th=188546c7eacf813e&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9rNA-DAc8XstRaD9KKyiWfmGaUlQ4AweJv-edXNyv59-VMI1xQLS0_sloS6rdyi5pBPxuO4uVm5aipHpnJ-d9SxJMUZfTvRdeU4bLHan-7GylPO20LjYqKDqU&disp=emb&realattid=188546c6852e4e019f71",
    },
    {
      id: 3,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-3847389215670312223&th=188546cb4b270518&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-gUm6AQJyqxXkLbcAFmWiG9Q1Ig5MF7KWt3hikayigkoVYPIFUhRCCFGQ_GH0WilB7vCUB-WoniWIgtUQKuMBR1IMpDWPiZsXjXKEs1_sHvXA0w1evK5LnYm0&disp=emb&realattid=188546ca608e4e019f71",
    },
    {
      id: 4,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-1277476476919962256&th=188546d0c20c82cf&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ83ZsNs16N1ADXvgkLJdqdnAkhQfHNp3u2cIynIwKa0Exfa-ENNfGj_tIaz6bkVFUhPgDP8nvlm-pcWah8HwLB5K6C-QwJHVwCCTc6l_IYtFjvOq8l0fgU9btQ&disp=emb&realattid=188546ce0c4e4e019f71",
    },
    {
      id: 5,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-4168560864297644662&th=188546f3de084279&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_WqGKs1YIKFS0WpvY5fTzjfATt1g06zmfU1Ybu6HOKFQD6NBs7ZtM5ZsmN9KQHZaFMO2CXS6nDdfvqGErfXzKJFhDrmaNugRU2jS81J1vrCMs-tP8DOLE720s&disp=emb&realattid=188546f2bbfe4e019f71",
    },
    {
      id: 6,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r993008005014787816&th=188546fcf8c899f0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-s1SK6LgKMEjL9J0t9JRmDH1iUOAJVwdAFkpc5qUoX4Cg-FJ2oSNZ_MUkzLVARJDvl1XgDfR7-93NwoX-9dfgBH-q0kq3GdkSbQVyJu45D_p0AHSr8lPWDS-k&disp=emb&realattid=188546fb712e4e019f71",
    },
    {
      id: 7,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7792112099324620302&th=18854701a30fbc10&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-8IMhrGt_kMdaS83zZwUWdI19GaIl_rTDQGtAcIbbVMSB_OES-ypr5h9bwwyhtKRO_28GqZ2x6A3tv5lcsKGp_Qxo_HcnFHqQDI_qjElsgA3yzfqyZ-RGtXbY&disp=emb&realattid=18854700439e4e019f71",
    },
    {
      id: 8,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-4195204797441257516&th=18854708b7755915&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_wgVarXYOEuq-SLcDd-6J99jqqTOxeh_oUOs-QtuVeFjlvTKgBvzxXgdglKjgRua4hUNOLya0ZfGvvcjeJQlkWqK0sDwDtZKCR2q25aysqiOg3cE7W0c56PD4&disp=emb&realattid=18854706e69e4e019f71",
    },
    {
      id: 9,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-294887216543021091&th=1885488902ce6291&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8UFyreXOOkEI5vgEh0qb3urF4OsWtwOq7zO8-1yYwyTKwatuGmGP2jk81xVFXhiQdyTjdRiq9ABwJogYqrsVMQtdxefvZ2l4jJwNQGDJ8LHuOfkGHVPyXJszs&disp=emb&realattid=18854887fcee4e019f71",
    },
    {
      id: 10,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7171818787244272258&th=1885488e4a7ac422&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8nER0QcUX0cNmuYIlqwQ4u4N8-Cl__SYbpitWsdemqKFRAIx5dms0N3HeNb7HTWCJIjcK0fG6uTGAC9ta5JNhWagOKLRm960EMxpiXTeoc3zBOdbGItlkZ9rA&disp=emb&realattid=1885488d032e4e019f71",
    }
  ]

  useEffect(() => {
   if (window.cloudinary) return;
   cloudinaryRef.current =  window.cloudinary 
   cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloudName: "dgr7iw6kd",
      
   })
  }, []);

  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  return (
   <>
    <div className={model ? "model open" : "model"}>
      <img src={tempImgSrc} alt="pic" />
      <CloseIcon onClick={() => setModel(false)} />
    </div>
   <div> 
      <h1 style={{textAlign: "center"}}>Image Gallery</h1>
      <h2 style={{textAlign: "center"}}>Click on the image to view detail</h2> 
    <div>


    </div>
      <div className="gallery">
        {data.map((image, index) => {
          return (
            <div key={index} className="pics" onClick={()=> getImg(image.imgSrc)}>
              <img src = {image.imgSrc} style={{width: "100%"}} alt="pictures" />
            </div>
        )
        })}
      </div>  
    </div>
   </> 
  )
}
