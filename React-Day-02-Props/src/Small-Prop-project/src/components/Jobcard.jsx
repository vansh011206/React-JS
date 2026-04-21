

const Jobcard = (props) => {
  return (
    <div>
      <div className="job-card">
        <div className="header">
          <div className="logo-box">
            <img
              src="{props.logo}"
              alt="{props.company}"
            />
          </div>
          <button className="save-button">
            Save
          </button>
        </div>

        <div className="content">
          <div className="company-row">
            <span className="company-name">{props.company}</span>
            <span className="posted-at">{props.postedAt}</span>
          </div>
          <h1 className="title">{props.title}</h1>

          <div className="tags-row">
            <span className="pill">{props.tags[0]}</span>
            <span className="pill">{props.tags[1]}</span>
          </div>
        </div>

        <hr className="separator" />

        <div className="footer">
          <div className="info-group">
            <span className="salary">{props.salary}</span>
            <span className="location">{props.location}</span>
          </div>
          <button className="apply-button">Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Jobcard;
