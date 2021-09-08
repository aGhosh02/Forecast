using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forecast_Tool.DataAccess;
using Forecast_Tool.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Forecast_Tool.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataForecastController : ControllerBase
    {
        private readonly IDataAccessProvider _dataAccessProvider;

        public DataForecastController(IDataAccessProvider dataAccessProvider)
        {
            _dataAccessProvider = dataAccessProvider;
        }


        [Route("AddorUpdateRecord")]
        [HttpPost]
        public object AddorUpdateRecord(ForecastEstimate forecast)
        {
            try
            {
                if (forecast.ID == 0)
                {
                    _dataAccessProvider.AddForecastEstimateRecord(forecast);
                    return new Response
                    {
                        Status = "Success",
                        Message = "Data Successfully Added"
                    };
                }
                else
                {
                    _dataAccessProvider.UpdateForecastEstimateRecord(forecast);
                        return new Response
                        {
                            Status = "Updated",
                            Message = "Updated Successfully"
                        };
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Data not insert"
            };

        }

        // GET: api/<DataForecastController>
        [HttpGet]
        [Route("GetAllRecords")]
        public IEnumerable<ForecastEstimate> Get()
        {
            return _dataAccessProvider.GetForecastEstimateRecords();
        }

        // GET api/<DataForecastController>/5
        [HttpGet("{id}")]
        [Route("GetSingleRecord")]
        public ForecastEstimate Details(int id)
        {
            return _dataAccessProvider.GetForecastEstimateSingleRecord(id);
        }

        // POST api/<DataForecastController>
        [HttpPost]
        [Route("AddData")]
        public IActionResult Create([FromBody] ForecastEstimate forecast)
        {
            if (ModelState.IsValid)
            {
                
                _dataAccessProvider.AddForecastEstimateRecord(forecast);
                return Ok();
            }
            return BadRequest();
        }

        // PUT api/<DataForecastController>/5
        [HttpPut("{id}")]
        [Route("UpdateData")]
        public IActionResult Edit([FromBody] ForecastEstimate forecast)
        {
            if (ModelState.IsValid)
            {
                _dataAccessProvider.UpdateForecastEstimateRecord(forecast);
                return Ok();
            }
            return BadRequest();
        }

        // DELETE api/<DataForecastController>/5
        [HttpDelete("{id}")]
        [Route("DeleteData")]
        public IActionResult DeleteConfirmed(int id)
        {
            var data = _dataAccessProvider.GetForecastEstimateSingleRecord(id);
            if (data == null)
            {
                return NotFound();
            }
            _dataAccessProvider.DeleteForecastEstimateRecord(id);
            return Ok();
        }
    }
}
