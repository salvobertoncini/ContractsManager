from pymongo import MongoClient
import json

"""
per collegarsi al db:
exec su kinect
mongo
use SpyTorch
db.aggregate.find() per vedere tutto
"""

DBNAME = 'ContractsManager'
DBCOLLECTION = 'collection'
DBHOST = 'localhost'
DBPORT = 32768
DBUSERNAME = ''
DBPASSWORD = ''

#Connect Mongo by means of creation of MongoClient
def connectMongoDB():
    return MongoClient(DBHOST, DBPORT)

#Close MongoClient connection
def closeMongoDB(client):
    client.close()

#Select the collection, implying dbname as default DBNAME
def selectCollectionMongoDB(client, dbcollection=DBCOLLECTION, dbname=DBNAME):
    db = client[dbname]
    return db[dbcollection]

#Select the latest N elements of a collection, returning them in a list
def selectLatestNElementsMongoDB(N):
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    if N == 0:
        return list(collection.find())
    else:
        return list(collection.find().skip(collection.count() - N))


def selectAllUsers():
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    return collection.find()


# Select user with slug
def selectUserWithSlug(slug):
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    return collection.find({"UserInfo": {"Username": slug}})


def selectDevicesWithSlug(slug):
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    return collection.find({"TelephoneInfo.IMEI": slug})


def selectAllWebContracts():
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    return collection.find()


def selectUserWebContracts():
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    return collection.find()

def selectAllUserContracts():
    client = connectMongoDB()
    collection = selectCollectionMongoDB(client)
    closeMongoDB(client)

    return collection.find({"document": "contratto"})
