export default ({ cast, onChoice }) => {
<<<<<<< HEAD
=======

>>>>>>> 87e9a92dd5ddd160405df5aa268c7d335666b7c5
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
      {
        cast.map(member => (
<<<<<<< HEAD
          <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
=======
          <a style={{ cursor: 'pointer' }} onClick={() => {
            onChoice(member);
          }} key={member.id} data-tooltip={member.name}>
>>>>>>> 87e9a92dd5ddd160405df5aa268c7d335666b7c5
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
}