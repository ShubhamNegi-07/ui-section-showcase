import RightCard from "./RightCard"

const RightContent = (props) => {
  console.log(props.users);
  

  return (
    <div id="right" className="h-full flex flex-nowrap gap-10 overflow-x-auto p-6 w-2/3">
      {props.users.map(function (elem, index) {
    return (
        <RightCard
            key={index}
            id={index}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
        />
    );
})}
    </div>
  )
}

export default RightContent