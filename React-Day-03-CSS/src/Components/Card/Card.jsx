import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div>
      <div className={styles['job-card']} >  
        <div className={styles['header']}>
          <div className={styles['logo-box']}>
            <img
              src="{props.logo}"
              alt="{props.company}"
            />
          </div>
          <button className={styles['save-button']}>
            Save
          </button>
        </div>

        <div className={styles['content']}>
          <div className={styles['company-row']}>
            <span className={styles['company-name']}>{props.company}</span>
            <span className={styles['posted-at']}>{props.postedAt}</span>
          </div>
          <h1 className={styles['title']}>{props.title}</h1>

          <div className={styles['tags-row']}>
            <span className={styles['pill']}>{props.tags[0]}</span>
            <span className={styles['pill']}>{props.tags[1]}</span>
          </div>
        </div>

        <hr className={styles['separator']} />

        <div className={styles['footer']}>
          <div className={styles['info-group']}>
            <span className={styles['salary']}>{props.salary}</span>
            <span className={styles['location']}>{props.location}</span>
          </div>
          <button className={styles['apply-button']}>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
