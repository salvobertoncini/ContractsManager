from pymongo import MongoClient

import MySQLdb

DBNAME = 'cirs'
DBCOLLECTION = 'aggregate'
DBHOST = 'localhost'
DBPORT = 32768
DBUSERNAME = ''
DBPASSWORD = ''

db = MySQLdb.connect("localhost", "root", "pwd", "nomedb")

#Connect Mongo by means of creation of MongoClient
def connectDB():
    cursor = db.cursor()
    return cursor

#Close MongoClient connection
def closeDB():
    db.close()

def printdbversion(cursor):
    cursor.execute("SELECT VERSION()")
    data = cursor.fetchone()

    for d in data:
        print d