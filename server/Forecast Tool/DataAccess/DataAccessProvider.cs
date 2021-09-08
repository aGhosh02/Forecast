using Forecast_Tool.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forecast_Tool.DataAccess
{
    public class DataAccessProvider : IDataAccessProvider
    {
        private readonly PostgreSqlContext _context;

        public DataAccessProvider(PostgreSqlContext context)
        {
            _context = context;
        }

        public void AddForecastEstimateRecord(ForecastEstimate forecastEstimates)
        {
            _context.ForecastEstimate.Add(forecastEstimates);
            _context.SaveChanges();
        }

        public void UpdateForecastEstimateRecord(ForecastEstimate forecastEstimates)
        {
            _context.ForecastEstimate.Update(forecastEstimates);
            _context.SaveChanges();
        }

        public void DeleteForecastEstimateRecord(int id)
        {
            var entity = _context.ForecastEstimate.FirstOrDefault(t => t.ID == id);
            _context.ForecastEstimate.Remove(entity);
            _context.SaveChanges();
        }

        public ForecastEstimate GetForecastEstimateSingleRecord(int id)
        {
            return _context.ForecastEstimate.FirstOrDefault(t => t.ID == id);
        }

        public List<ForecastEstimate> GetForecastEstimateRecords()
        {
            return _context.ForecastEstimate.ToList();
        }
    }
}

