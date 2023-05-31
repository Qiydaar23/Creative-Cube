import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import Header from '../components/Header/Header';


export default function AshGallery() {

  const cloudinaryRef = useRef();
  const videoRef = useRef();

  const data = [
    {
      id: 1,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-1051456376517247853&th=18859228b169b1bd&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9PIdT7AHYuFB8BmDJSf3n4OFrcR929_eG7GGl_ju_zPuUzwHpGBVZRTY9dSXhjCeOtPLpGR-aUv8ttYXx5i_WOTR2yigdnd2SMj3mGvr7FHfcQYqL_rX9xBvc&disp=emb&realattid=18859226c5ce4e019f71",
    },
    {
      id: 2,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-2421345201538931010&th=1885922d82779651&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-jIDVwMmBhMQ-25bW1hlQmcnOvLgOxOOm5D_P_yZ_7y_ukgUqE27C5BAox2SIMBMoxXw2zM38gWYReRoIJ9RAgRaN3RmUWo1_8NPcP-5cnAns5qwPIq9bnK1M&disp=emb&realattid=1885922bb55e4e019f71",
    },
    {
      id: 3,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r6073354014837133575&th=18859232910b4d32&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-NlyNZPZx6HiNW6ZAD4ghBZOD6jres0AJhPjwxLTLiwCqaHTVAYHUNwiih2lnkANKSMlv8eSzEPThvVOJwxaHmsqHW-N6A4u1Rl6frRAo9GWt4aAXXcXxUH_A&disp=emb&realattid=18859230877e4e019f71",
    },
    {
      id: 4,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-239661619720895667&th=1885923771b4df1f&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-308GvqFLjyppx6mn-H-zAb-fOdcItlg0QPWDMI2WLyDXfyMIQVaP_ydaBmsykMcBmIt_hJoJGjLtySUWI3uGT0ta15D9YElE6GA03U5EVTMGAYiPbWpnYV4M&disp=emb&realattid=188592360c4e4e019f71",
    },
    {
      id: 5,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-4616093385860952903&th=1885923e446169b7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8NphKl_28k6jU9TVWTTT_5bUk8P_oQBkcrOrYsTLttFlREXSVvCg8SXcWrKnhYEe7NwIBfmaYoZqPF5ttu9LVPySbC2gw_a4ieKkuziF66r1sFZG2suU4cjXY&disp=emb&realattid=1885923b137e4e019f71",
    },
    {
      id: 6,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-320906217442200554&th=1885924351803b15&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ86jsMDgNPMir6Pp1GjN4hG2QfsveX-emcN5Tx2zusNpipvs_s8RLB-i38H2eK6ilFuNs33Sv46EpWeovgC-loxFiboES78Qgoza13z1ckXNZgLmxLe3j4BiUM&disp=emb&realattid=1885924173de4e019f71",
    },
    {
      id: 7,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r4872619988245212573&th=1885924898c90215&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8QN8InwMhvORzAujtDlkEml5c97PnChp_jk5VkGAELGaq9vBBM9Q_I5nAw2p_zih9GK2nLPCblxQWbkdBoNTNmeW9mkcjIHU_--c8K_lVCldeRPv19YPhhmoo&disp=emb&realattid=1885924636de4e019f71",
    },
    {
      id: 8,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-6632521886296230387&th=1885930ec043190d&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ93CeLtfw8l6DBO-0YFl1RzTJBhXT2ZDMZdAiQl2ccg32Atbh7Aj2Nc1NJiFAbThC82_ZSoiIjB7akSWZ2z9c2xgmJALdLj3Vc_8Eh313dFvbIp8dMVByGrv0c&disp=emb&realattid=1885930df3fe4e019f71",
    },
    {
      id: 9,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-5591547910612551338&th=18859312fc6cd365&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_NSh9FjAD9jUGtBvJ75xWXsbFZhm-FGGvYI88EMrgqnlxzJjSGE9nNyjOvRQv1FyX_70yoz3-_A_kNBsTIDd3zZrdlhv6RuiQmpc8qcgVOlIf-t--nYbTRF30&disp=emb&realattid=188593122ece4e019f71",
    },
    {
      id: 10,
      imgSrc: "https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r3005053689638599454&th=1885931665bd38c4&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9mNR3GzzD1VE2ZqouofC7e5LM5lvPidqFyA5A7faXurJke-YSHbZNPHH2emaOELDLn_S-ALrUsQPnQEDqgr93FLjgU6k0lVV4ndb3ce-jnbQWeaahY5yYwtyg&disp=emb&realattid=18859315ad9e4e019f71",
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
   <Header />
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
