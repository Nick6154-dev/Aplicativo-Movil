FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app
COPY ./controller /code/controller
COPY ./service /code/service

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8003"]