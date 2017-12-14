import json
import responses
import database


class Requests:
    req = any

    def __init__(self, req, type="POST"):
        if type == "POST":
            self.req = json.loads(req.body)
        else:
            self.req = req


            # getters

    def getBody(self):
        return self.req

    def getReq(self, r):
        return r["r"]

    def GetAllWebContracts(self):

        # Initialize response
        response = responses.Responses()
        response.setResponse("response", True)
        response.setResponse("test", "test")

        return response


    def postRequest(self):

        # Initialize response
        response = responses.Responses()

        # Grub body from request
        data = self.getBody()

        # Grub request from body
        r = self.getReq(data)
        print "request: " + r

        # Switch 'r' for every possible request
        if r == "GetAllWebContracts":
            response = self.GetAllWebContracts()

        print "response: "
        print response.getResponse()

        # If we haven't a response
        if not response.getResponse():
            response.setResponse("response", False)
            response.setResponse("Message", "Qualcosa e' andato storto")

        # Return the response
        return response.getResponse()