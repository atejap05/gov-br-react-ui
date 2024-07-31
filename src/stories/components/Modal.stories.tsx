import { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalBody, ModalFooter } from "../../components/Modal";
import { Button } from "../../components/Button";
const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalExample: Story = {
  render: () => (
    <>
      <Modal
        active={true}
        title="Titulo do Modal"
        subtitle="Modal descrição com subtitulo"
        onClose={() => {}}
      >
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque,
            quisquam eum mollitia saepe harum aliquid iusto, maxime molestiae
            modi tempore? Et excepturi illum quis soluta dolorum alias
            consectetur nobis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque,
            quisquam eum mollitia saepe harum aliquid iusto, maxime molestiae
            modi tempore? Et excepturi illum quis soluta dolorum alias
            consectetur nobis!
          </p>
        </ModalBody>
        <ModalFooter aling="center">
          <Button>Cancel</Button>
          <Button className="ml-2">Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  ),
};
