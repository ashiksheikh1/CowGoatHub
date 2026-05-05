import AnimalCard from "@/components/AnimalCard";
import Banner from "@/components/Banner";
import QurbaniPreparation from "@/components/QurbaniPreparation";
import TipsAndTopBreeds from "@/components/TipsAndTopBreeds";



export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <AnimalCard></AnimalCard>
       <QurbaniPreparation></QurbaniPreparation>
       <TipsAndTopBreeds></TipsAndTopBreeds>

    </div>
  );
}
