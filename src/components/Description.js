import st from './Description.module.css'

const Description = ({ data }) => {
  return (
    <div className={st.container}>
      <div className={st.label}>
        {data.title}
      </div>

      <div className={st.crawl}>
        {data.opening_crawl}
      </div>
    </div>
  )
}

export default Description