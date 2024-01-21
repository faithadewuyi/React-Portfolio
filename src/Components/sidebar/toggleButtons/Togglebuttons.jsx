

const Togglebuttons = ({setOpen}) => {
  return (
   <button onClick={()=>setOpen(prev=>!prev)}>button</button>
  )
};

export default Togglebuttons;
