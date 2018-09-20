
object Main extends App {
  def f1[T1](a: T1) = a
  def f2[T2](a: T2) = "Hello, " + a
  val b: String = f2(f1(42))
}






abstract class Vehicle {  }
abstract class Car extends Vehicle {  }
class Sedan extends Car {  }
class Hatchback extends Car {  }
class Bus extends Vehicle {  }
// etc

class MyCarWrapper[Car](c: CarType) {
  def car: CarType = c
  // ...
}

val sedanWrapper = new MyCarWrapper[Sedan](new Sedan)
val hatchbackWrapper = new MyCarWrapper[Hatchback](new Hatchback)
val busWrapper = new MyCarWrapper[Bus](new Bus)



/** {
      "status": "success",
       "data": {"product1": 137,
                "product2": 23,
                "product3": 77
                }
      }


      {"status": "error", "message": "Illegal value for year"}
*/

import scala.concurrent.Future

def Test(year: Integer): Option[List] ={
try {
  val forecastOrder: getForcastOrderData(year)
} catch {
case e: Exception => Logger.error(s"")
}

}


/**
Method to pull forecast data
Params: year: integer value i.e 2018
Output: List of products with count
*/
def getForcastOrderData(year: Integer) {
val searchResponse: Future[WSResponse] = ws.url(s"http://myserver.com/api/forecast/${year}/")
    val response = Await.result(searchResponse)
    // {
          "status": "success",
           "data": {"product1": 137,
                    "product2": 23,
                    "product3": 77
                    }
          }
    val jsonResponse = response.json
    val reviews = (jsonResponse \ "user_reviews").as[List[JsValue]]
    reviews
}
