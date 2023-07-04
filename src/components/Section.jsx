
export default function Section({children, id}) {

    let style = 'h-[100vh] pt-[80px] p-[50px] ';
    if (id === "home") style = 'h-[100vh] mt-[-40px] bg-bg-img object-none bg-cover z-0 w-full';

    return(
        <div id={id} className= {style}>
            {children}
        </div>
    )
}