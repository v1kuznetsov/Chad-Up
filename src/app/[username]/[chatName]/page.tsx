import { getUser } from "@/lib/getUser";
import { chatWorker, sendMessage } from "../actions";
import { Button } from "@/components/Button";
import { getMessages } from "@/lib/getMessages";
import { TextArea } from "@/components/TextArea";

export default async function Page({
  params,
}: {
  params: { chatName: string };
}) {
  const chatName = decodeURIComponent(params.chatName);
  const userData = await getUser();
  const chatData = await getMessages(chatName);

  return (
    <div className="flex grow flex-col items-center justify-end">
      <div className="w-full p-[1rem] text-center">
        {chatData.messages?.map((item, index) => (
          <div
            className={`${item.user_id === userData.profile?.id ? "justify-start" : "justify-end"} flex`}
            key={index}
          >
            <p className="mx-4 my-1 rounded-[0.75rem] bg-[#333333] px-4 py-1">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <form
        action={sendMessage}
        className="flex w-full items-center justify-center gap-[1rem] px-[1rem]"
      >
        <TextArea
          id="message"
          className=""
          name="message"
          placeholder="Write a message..."
          required
        />
        <input type="hidden" name="url" value={chatName} />
        <input type="hidden" name="chat_id" value={chatData.chatId} />
        <input type="hidden" name="chat_id" value={chatName} />
        <input type="hidden" name="user_id" value={userData.profile?.id} />
        <Button>Send</Button>
      </form>
    </div>
  );
}
