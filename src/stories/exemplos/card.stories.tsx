import { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/Card";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Card> = {
  title: "Exemplos/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SimplesECompleto: Story = {
  render: () => (
    // Card Simples e completo
    <>
      <h1>Card simples e completo</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:w-full md:w-2/3 mx-auto">
        <Card className="flex-1">
          <CardContent>
            <img src="https://picsum.photos/id/0/500" alt="Imagem de exemplo" />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-3 justify-between items-center">
                <Avatar
                  size="sm"
                  src="https://picsum.photos/id/823/400"
                  alt={"Maria Amorim"}
                />
                <div className="flex flex-col justify-center items-start">
                  <span className="text-lg font-semibold">Maria Amorim</span>
                  <span>UX Designer</span>
                </div>
              </div>
              <Button variant="tertiary" circle>
                <FontAwesomeIcon icon={faEllipsisV} />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              perferendis nam porro atque ex at, numquam non optio ab eveniet
              error vel ad exercitationem, earum et fugiat recusandae harum?
              Assumenda.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row gap-3 justify-between items-center">
              <Button variant="tertiary" size="md">
                Comentar
              </Button>
              <div>
                <Button circle variant="tertiary">
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button circle variant="tertiary">
                  <FontAwesomeIcon icon={faShareAlt} />
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  ),
};

export const Desativado: Story = {
  render: () => (
    <Card disabled className="md:w-1/2 mx-auto">
      <CardHeader>
        <div className="flex flex-row gap-3 justify-between items-center">
          <div className="flex flex-row gap-3 justify-between items-center">
            <Avatar
              size="sm"
              src="https://picsum.photos/id/823/400"
              alt={"Maria Amorim"}
            />
            <div className="flex flex-col justify-center items-start">
              <span className="text-lg font-semibold">Maria Amorim</span>
              <span>UX Designer</span>
            </div>
          </div>
          <Button variant="tertiary" circle>
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          perferendis nam porro atque ex at, numquam non optio ab eveniet error
          vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-3 justify-between items-center">
          <Button variant="tertiary" size="md">
            Comentar
          </Button>
          <div>
            <Button circle variant="tertiary">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button circle variant="tertiary">
              <FontAwesomeIcon icon={faShareAlt} />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Hover: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card hover className="md:w-1/2 mx-auto">
        <CardContent>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            perferendis nam porro atque ex at, numquam non optio ab eveniet
            error vel ad exercitationem, earum et fugiat recusandae harum?
            Assumenda.
          </p>
        </CardContent>
      </Card>
      <Card hover className="md:w-1/2 mx-auto">
        <CardContent>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            perferendis nam porro atque ex at, numquam non optio ab eveniet
            error vel ad exercitationem, earum et fugiat recusandae harum?
            Assumenda.
          </p>
        </CardContent>
      </Card>
      <Card hover className="md:w-1/2 mx-auto">
        <CardContent>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            perferendis nam porro atque ex at, numquam non optio ab eveniet
            error vel ad exercitationem, earum et fugiat recusandae harum?
            Assumenda.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const Fixed: Story = {
  render: () => (
    <Card fixed className="container sm:w-2/3 md:w-1/2 mx-auto">
      <CardHeader>
        <div className="flex flex-row gap-3 justify-between items-center">
          <div className="flex flex-row gap-3 justify-between items-center">
            <Avatar
              size="sm"
              src="https://picsum.photos/id/823/400"
              alt={"Maria Amorim"}
            />
            <div className="flex flex-col justify-center items-start">
              <span className="text-lg font-semibold">Maria Amorim</span>
              <span>UX Designer</span>
            </div>
          </div>
          <Button variant="tertiary" circle>
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          perferendis nam porro atque ex at, numquam non optio ab eveniet error
          vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          perferendis nam porro atque ex at, numquam non optio ab eveniet error
          vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          perferendis nam porro atque ex at, numquam non optio ab eveniet error
          vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          perferendis nam porro atque ex at, numquam non optio ab eveniet error
          vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-3 justify-between items-center">
          <Button variant="tertiary" size="md">
            Comentar
          </Button>
          <div>
            <Button circle variant="tertiary">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button circle variant="tertiary">
              <FontAwesomeIcon icon={faShareAlt} />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  ),
};
