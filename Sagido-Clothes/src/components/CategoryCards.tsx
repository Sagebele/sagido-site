import womanImg from "../assets/images/womanCardImage.jpg"
import manImg from "../assets/images/manCardImage.jpg"
import juniorImg from "../assets/images/juniorCardImage.jpg"

const CategoryCard = () => {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <h3 className="text-zinc-900 text-2xl font-bold mb-8 text-center">
          Explore Collections for All Ages and Styles.
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-cols-max lg:justify-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl overflow-hidden shadow-xl/30 inset-shadow-black  
                hover:cursor-pointer transition duration-300 hover:scale-110 lg:hover:scale-105 "
              >
                <div className="aspect-4/3 w-full overflow-hidden h-80">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex items-center justify-center gap-4">

                    <button 
                    className="rounded-xl px-4 py-2 text-sm font-semibold border bg-zinc-900 text-white 
                    hover:scale-105 transition hover:cursor-pointer"
                    >
                    {card.buttonText}
                  </button>
                </div>        
              </div>
            ))}
        </div>
        {/* <div className="my-12 flex items-center justify-center">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-zinc-900 to-transparent"></div>
        </div> */}
    </div>
    );
};
    
interface CardItemProp {
    id: string;
    title: string;
    imageUrl: string;
    buttonText: string;
    };
      
const cards: CardItemProp[] = [
    {
        id: "womenCard",
        title: "Women",
        imageUrl: womanImg,
        buttonText: "Shop Women",
    },
    {
        id: "menCard",
        title: "Men",
        imageUrl: manImg,
        buttonText: "Shop Men",
    },
    {
        id: "juniorCard",
        title: "Junior",
        imageUrl: juniorImg,
        buttonText: "Shop Junior",
    },
    ];


    export default CategoryCard;