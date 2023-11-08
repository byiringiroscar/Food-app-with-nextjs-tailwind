import Dash from "./Dash"

const servicesData = [
    {
        img: "/services__1.png",
        title: "Professional kitchen",
        desc: "lorem ipsum dolor amet consectetur adispiscing elit . Atque, odio"
    },
    {
        img: "/services__2.png",
        title: "Delivery",
        desc: "lorem ipsum dolor amet consectetur adispiscing elit . Atque, odio"
    },
    {
        img: "/services__3.png",
        title: "Wine List",
        desc: "lorem ipsum dolor amet consectetur adispiscing elit . Atque, odio"
    },
    {
        img: "/services__4.png",
        title: "Free wifi",
        desc: "lorem ipsum dolor amet consectetur adispiscing elit . Atque, odio"
    },
]

const Services = () => {
  return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">Choose Best <span className="text-accent">Service</span></h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem? <br /> quidem essse eum animi?</p>
            <div className="w-fit mx-auto">
                <Dash />
            </div>
        </div>


        <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8"></div>
    </div>
  )
}

export default Services