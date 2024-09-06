import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { PlatFormIconList } from "./PlatFormIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width="300px">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="1.75xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
