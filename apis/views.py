from django.http import HttpRequest, HttpResponse
import json

# Create your views here.
from django.shortcuts import render

from apis.models import Api, Send, Receive


def add_api(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        post = json.loads(request.body)
        title = post["title"]
        api_url = post["url"]
        if Api.objects.filter(url=api_url):
            return HttpResponse(json.dumps({"status": False, "error": "已有此api"}), content_type="application/json")
        types = post["type"]
        description = post.get("description")
        login_require = post.get("login_require")
        if not login_require:
            login_require = False
        send = post["send"]
        receive = post["receive"]
        api = Api(title=title, url=api_url, types=types, description=description, login_require=login_require)
        api.save()
        if not api:
            return HttpResponse(json.dumps({"status": False, "error": "未知错误"}), content_type="application/json")
        for i in send:
            name = i["name"]
            types = i["type"]
            send_ = Send(api=api, name=name, types=types)
            send_.save()
        for i in receive:
            name = i["name"]
            types = i["type"]
            receive_ = Receive(api=api, name=name, types=types)
            receive_.save()
        return HttpResponse(json.dumps({"status": True}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({"status": False, "error": "不支持get方法"}), content_type="application/json")


def change_api(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        post = json.loads(request.body)
        title = post["title"]
        api_url = post["url"]
        api_id = post["id"]
        apis = Api.objects.filter(id=api_id)
        if not apis:
            return HttpResponse(json.dumps({"status": False, "error": "没有此api"}), content_type="application/json")
        if apis[0].url != api_url and Api.objects.filter(url=api_url):
            return HttpResponse(json.dumps({"status": False, "error": "已有此api"}), content_type="application/json")
        types = post["type"]
        description = post.get("description")
        login_require = post.get("login_require")
        if not login_require:
            login_require = False
        send = post["send"]
        receive = post["receive"]
        api = apis[0]
        api.title = title
        api.url = api_url
        api.types = types
        api.description = description
        api.login_require = login_require
        api.save()
        if not api:
            return HttpResponse(json.dumps({"status": False, "error": "未知错误"}), content_type="application/json")
        Send.objects.filter(api=api).delete()
        Receive.objects.filter(api=api).delete()
        for i in send:
            name = i["name"]
            types = i["type"]
            send_ = Send(api=api, name=name, types=types)
            send_.save()
        for i in receive:
            name = i["name"]
            types = i["type"]
            receive_ = Receive(api=api, name=name, types=types)
            receive_.save()
        return HttpResponse(json.dumps({"status": True}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({"status": False, "error": "不支持get方法"}), content_type="application/json")


def get_apis(request: HttpRequest) -> HttpResponse:
    param = request.GET.get("q")
    d = Api.objects.all()

    def api_to_dict(api: Api):
        d = {}
        d["id"] = api.id
        d["title"] = api.title
        d["url"] = api.url
        d["type"] = api.types
        d["login_require"] = api.login_require
        d["description"] = api.description
        sends = Send.objects.filter(api=api)
        sends_ = []
        for i in sends:
            r = {}
            r["name"] = i.name
            r["type"] = i.types
            sends_.append(r)
        receives = Receive.objects.filter(api=api)
        receives_ = []
        for i in receives:
            r = {}
            r["name"] = i.name
            r["type"] = i.types
            receives_.append(r)
        d["send"] = sends_
        d["receive"] = receives_
        return d

    res = []
    for i in d:
        if (param and (i.url.find(param) != -1 or i.title.find(param) != -1)) or (not param):
            res.append(api_to_dict(i))
    return HttpResponse(json.dumps(res), content_type="application/json")


def delete_api(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        post = json.loads(request.body)
        api_id = post["id"]
        apis = Api.objects.filter(id=api_id)
        apis.delete()
        return HttpResponse(json.dumps({"status": True}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({"status": False, "error": "不支持get方法"}), content_type="application/json")


def index(request):
    return render(request, "index.html", {})
