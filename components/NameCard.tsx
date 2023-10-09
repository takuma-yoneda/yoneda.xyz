import React from 'react'
import styles from '../styles/NameCard.module.css'

type BioEntry = [string, string];
interface NameCardProps {
  image_url: string;
  name: string;
  altname: string;
  mobile: boolean;
};

let bio: BioEntry[] = [
  ['fa-solid fa-location-dot', 'Chicago'],  // Location
  ['fa-solid fa-user-graduate', 'PhD candidate at TTIC'],  // Position
  ['fa-solid fa-microscope', 'Reinforcement Learning, Robotics and NLP'],  // Interest
  ['fa-solid fa-envelope', 'takuma (at) ttic.edu']
]

const NameCard: React.FC<NameCardProps> = ({image_url, name, altname, mobile}) => {
  let pc_component = (
    <div className={`max-w-3xl ${styles.name_card}`}>
      <div className={styles.image_box}>
        {/* Workaround to fix aspect ratio (https://github.com/vercel/next.js/issues/18497#issuecomment-762397599) */}
        <div style={{
          height: '100%',
          width: '100%'
        }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <img src={image_url}
                 alt={name}
              /* style={{ */
              /* 'borderRadius': '25px', */
              /* }} */
            />
            {/* <Image */}
            {/*   src={image_url} */}
            {/*   alt='Which one is Merlion...?' */}
            {/*   layout='fill' */}
            {/*   objectFit='contain' */}
            {/*   objectPosition='right center' */}
            {/* /> */}
          </div>
        </div>
      </div>

      {/* <div className='ml-10 flex flex-col justify-between'> */}
      <div className={styles.name_box}>
        <h1 className='text-4xl pt-4'>{name}</h1>
        <p className='text-md pl-1'>{altname}</p>
      </div>
      <div className={styles.affiliation_box}>
        <ul>
          {bio.map((entry, idx) => {
            let [icon, name] = entry
            return (
              <li key={idx}><i className={`${icon} mb-4`}/><span className='pl-3'>{name}</span></li>
            )
          })}
        </ul>
      </div>
    </div>
  );
  return pc_component
}

export default NameCard
