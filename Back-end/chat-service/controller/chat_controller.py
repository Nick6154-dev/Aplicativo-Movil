from fastapi import APIRouter
from service.chat_service import do_prompt

router = APIRouter(prefix="/chatService", tags=["chat"])


@router.get("/")
async def root():
    return {"message": "Hello World"}


@router.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@router.post("/openapi/{number}")
async def openapi(number: int):
    return await do_prompt(number)
