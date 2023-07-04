
export default function Section({children, id}) {

    let style = 'h-[100vh] pt-[120px] p-[50px] ';
    if (id === "home") style += ' flex justify-center items-center flex-col bg-bg-img object-none bg-cover z-0 w-full';

    return(
        <div id={id} className= {style}>
            {children}
        </div>
    )
}