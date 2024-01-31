from fastapi import FastAPI
from controller.chat_controller import router
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()
app.include_router(router)
