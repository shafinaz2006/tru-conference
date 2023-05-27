const ProgramDetails = (props) => {
  const { programData } = props;
  return (
    <>
      {programData.map((program, i) =>
        <div key={i} className='programDiv'>
          <p className='programTime'>{program.time}:</p>
          <div className='programInfo'>
            {program.type === 'break' ?
              <div className='programBreak'>
                <p>{program.heading[0]}</p>
                {program.heading[1] && <p>{program.heading[1]}</p>}
              </div>
              :
              <div className='programTalk'>
                <p>{program.heading}</p>
                <p>{program.name}</p>
                <p>{program.abstract}</p>
              </div>}
          </div>
        </div>
      )}
    </>
  )
}

export default ProgramDetails;