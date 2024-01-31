import os
from openai import OpenAI, APIError


async def generate_prompt(number):
    return f"Requiero que conviertas este numero {number} a binario."


async def do_prompt(number):
    try:
        openAIClient = OpenAI()
        openAIClient.api_key = os.getenv("OPENAI_API_KEY", "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")
        return await openAIClient.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": await generate_prompt(number)}
            ],
            temperature=0.1
        )
    except APIError as error:
        return "Error en: " + error.message
