import "./CurrentChat.scss";
import { Card } from "@mantine/core";
import { motion, useMotionValue } from "framer-motion";
import { Input } from "@nextui-org/react";
const CurrentChat = () => {
  const y = useMotionValue(0);

  return (
    <motion.div
      style={{ backgroundColor: "#252A31", y, top: 300 }}
      className="chatCard"
      dragConstraints={{ top: -550, bottom: 0 }}
      drag="y"
    >
      <div className="currentChatDiv">
        <div className="messagesArea">
          <div className="messages"></div>
          <div className="inputField">
            <Input
              rounded
              bordered
              color="success"
              placeholder="Message"
              fullWidth
            ></Input>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentChat;