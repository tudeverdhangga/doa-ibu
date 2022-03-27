import re
import string
import json
import nltk
import math
from collections import Counter
from flask import Flask, jsonify, request
from flask_cors import CORS
from nltk.tokenize import word_tokenize
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resources={r"/*":{'origins':"*"}})

factory = StemmerFactory()
stemmer = factory.create_stemmer()

def text_processing(text):
    text = text_prepo(text)
    text = text_mining(text)
    text = check_synonim(text)
    answer = get_answer(text)
    return answer

def text_prepo(text):
    text = text.lower()
    text = text.translate(str.maketrans("","",string.punctuation))
    text = text.strip()
    return text

def text_mining(text):
    factory = StopWordRemoverFactory()
    stopword = factory.create_stop_word_remover()
    text = stopword.remove(text)
    text = stemmer.stem(text)
    return text

def check_synonim(text):
    text = word_tokenize(text)
    text2 = " "
    with open('dictionary.txt') as f:
        data = f.read()
        
    this_dict = json.loads(data)
    new_text = []
    temp = ""
    for t in text :
        isbreak = False
        for d in this_dict:
            if t in this_dict[d] :
                temp = d
                temp = word_tokenize(temp)
                for k in temp :
                    new_text.append(k)
                isbreak = True
        if (isbreak == False) :
            new_text.append(t)
    text2 = text2.join(new_text)
    return (text2)

def get_answer(text):
    with open('knowledge_base.txt') as f:
        data = f.read()
        
    knowledge_base = json.loads(data)
    
    user_tk = text
    print(user_tk)
    user_tk_vector = text_to_vector(user_tk)
    max = 0
    id_save = 0
    for x in knowledge_base:
        db_tk = x["keyword"]
        print(db_tk)
        db_tk_vector = text_to_vector(db_tk)
        cosine_result = get_cosine(user_tk_vector, db_tk_vector)
        print(cosine_result)

        if cosine_result>max :
            max = cosine_result
            id_save = x["id"]
        print("similarity: ", cosine_result)
        print("max: ", max)
        print("id: ", id)
    if max > 0.5 :
        for y in knowledge_base:
            if y["id"] == id_save :
                myresult2 = y["jawaban"]
    else :
        myresult2 = "Maaf tidak ketemu"
    
    answer = myresult2
    print(answer)
    return answer

def get_cosine(vec1, vec2):
    intersection = set(vec1.keys()) & set(vec2.keys())
    numerator = sum([vec1[x] * vec2[x] for x in intersection])

    sum1 = sum([vec1[x]**2 for x in vec1.keys()])
    sum2 = sum([vec2[x]**2 for x in vec2.keys()])
    denominator = math.sqrt(sum1) * math.sqrt(sum2)

    if not denominator:
        return 0.0
    else:
        return float(numerator) / denominator


def text_to_vector(text):
    word = re.compile(r'\w+')
    words = word.findall(text)
    return Counter(words)

#Routing

@app.route('/', methods=['GET'])
def greetings():
    return("Hello World !")

@app.route('/response', methods=['GET', 'POST'])
def response():
    if request.method == 'POST':
        post_data = request.get_json()
        message = post_data.get('content')
        answer = text_processing(message)
        return(answer)
    else :
        return("Halo selamat datang di chatbot PENS, ada yang bisa dibantu ?")

@app.route('/greeting1', methods=['GET'])
def greeting1():
    return("Halo selamat datang di chatbot PENS")

@app.route('/greeting2', methods=['GET'])
def greeting2():
    return("Silahkan tanyakan beberapa informasi tentang PENS")

@app.route('/greeting3', methods=['GET'])
def greeting3():
    return("Seperti dimana lokasi PENS atau apa saja prodi yang ada di PENS")

if __name__ == "__main__":
    app.run(debug=True)