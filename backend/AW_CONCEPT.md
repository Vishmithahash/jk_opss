# AW Concepts API Documentation

Base URL: `http://localhost:3008`

## Endpoints

### 1. Create AW Concept
**POST** `/aw-concepts`

Create a new artwork concept entry.

**Request Body:**
```json
{
  "requested_by": 101,
  "requested_date": "2025-11-12",
  "required_date": "2025-12-01",
  "artwork_type": "Digital",
  "jobtype": "New Design",
  "previous_design": "N/A",
  "design_category": "Branding",
  "print_category": "Offset",
  "pattern_number": "PTN-001",
  "pattern_name": "Floral",
  "client_name": "ABC Corporation",
  "template_type": "Standard",
  "design_descript": "Logo design for new product line with modern aesthetics",
  "name": "ABC",
  "numbers": "005",
  "design_descripti": "Modern minimalist design with blue and gold color scheme. Includes company logo, tagline, and contact information."
}
```

**Response (201 Created):**
```json
{
  "statusCode": 201,
  "message": "AW Concept created successfully",
  "data": {
    "id": 1,
    "requested_by": 101,
    "requested_date": "2025-11-12T00:00:00.000Z",
    "required_date": "2025-12-01T00:00:00.000Z",
    "artwork_type": "Digital",
    "jobtype": "New Design",
    "previous_design": "N/A",
    "design_category": "Branding",
    "print_category": "Offset",
    "pattern_number": "PTN-001",
    "pattern_name": "Floral",
    "client_name": "ABC Corporation",
    "template_type": "Standard",
    "design_descript": "Logo design for new product line with modern aesthetics",
    "name": "ABC",
    "numbers": "005",
    "design_descripti": "Modern minimalist design with blue and gold color scheme. Includes company logo, tagline, and contact information."
  }
}
```

---

### 2. Get All AW Concepts
**GET** `/aw-concepts`

Retrieve all artwork concepts.

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concepts retrieved successfully",
  "data": [
    {
      "id": 1,
      "requested_by": 101,
      "requested_date": "2025-11-12T00:00:00.000Z",
      "required_date": "2025-12-01T00:00:00.000Z",
      "artwork_type": "Digital",
      "jobtype": "New Design",
      "previous_design": "N/A",
      "design_category": "Branding",
      "print_category": "Offset",
      "pattern_number": "PTN-001",
      "pattern_name": "Floral",
      "client_name": "ABC Corporation",
      "template_type": "Standard",
      "design_descript": "Logo design for new product line",
      "name": "ABC",
      "numbers": "005",
      "design_descripti": "Modern minimalist design with blue theme"
    },
    {
      "id": 2,
      "requested_by": 102,
      "requested_date": "2025-11-10T00:00:00.000Z",
      "required_date": "2025-11-25T00:00:00.000Z",
      "artwork_type": "Print",
      "jobtype": "Redesign",
      "previous_design": "PTN-OLD-001",
      "design_category": "Marketing",
      "print_category": "Digital",
      "pattern_number": "PTN-002",
      "pattern_name": "Geometric",
      "client_name": "XYZ Industries",
      "template_type": "Custom",
      "design_descript": "Brochure redesign for product catalog",
      "name": "XYZ",
      "numbers": "010",
      "design_descripti": "Bold geometric patterns with company brand colors"
    }
  ],
  "count": 2
}
```

---

### 3. Search AW Concepts
**GET** `/aw-concepts?search=ABC`

Search for concepts by client name, pattern name, artwork type, or job type.

**Query Parameters:**
- `search` (optional): Search term to filter results

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concepts retrieved successfully",
  "data": [
    {
      "id": 1,
      "requested_by": 101,
      "requested_date": "2025-11-12T00:00:00.000Z",
      "required_date": "2025-12-01T00:00:00.000Z",
      "artwork_type": "Digital",
      "jobtype": "New Design",
      "previous_design": "N/A",
      "design_category": "Branding",
      "print_category": "Offset",
      "pattern_number": "PTN-001",
      "pattern_name": "Floral",
      "client_name": "ABC Corporation",
      "template_type": "Standard",
      "design_descript": "Logo design for new product line",
      "name": "ABC",
      "numbers": "005",
      "design_descripti": "Modern minimalist design"
    }
  ],
  "count": 1
}
```

---

### 4. Get AW Concept by ID
**GET** `/aw-concepts/:id`

Retrieve a specific artwork concept by its ID.

**URL Parameters:**
- `id`: Concept ID (number)

**Example:** `GET /aw-concepts/1`

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concept retrieved successfully",
  "data": {
    "id": 1,
    "requested_by": 101,
    "requested_date": "2025-11-12T00:00:00.000Z",
    "required_date": "2025-12-01T00:00:00.000Z",
    "artwork_type": "Digital",
    "jobtype": "New Design",
    "previous_design": "N/A",
    "design_category": "Branding",
    "print_category": "Offset",
    "pattern_number": "PTN-001",
    "pattern_name": "Floral",
    "client_name": "ABC Corporation",
    "template_type": "Standard",
    "design_descript": "Logo design for new product line",
    "name": "ABC",
    "numbers": "005",
    "design_descripti": "Modern minimalist design"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "statusCode": 404,
  "message": "AwConcept 999 not found",
  "error": "Not Found"
}
```

---

### 5. Get by Artwork Type
**GET** `/aw-concepts/artwork-type/:type`

Filter concepts by artwork type.

**URL Parameters:**
- `type`: Artwork type (string)

**Example:** `GET /aw-concepts/artwork-type/Digital`

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concepts with artwork type 'Digital' retrieved successfully",
  "data": [
    {
      "id": 1,
      "requested_by": 101,
      "requested_date": "2025-11-12T00:00:00.000Z",
      "required_date": "2025-12-01T00:00:00.000Z",
      "artwork_type": "Digital",
      "jobtype": "New Design",
      "client_name": "ABC Corporation",
      "pattern_name": "Floral",
      "design_descript": "Logo design for new product line",
      "name": "ABC",
      "numbers": "005"
    }
  ],
  "count": 1
}
```

---

### 6. Get by Client Name
**GET** `/aw-concepts/client/:name`

Filter concepts by client name (partial match).

**URL Parameters:**
- `name`: Client name or partial name (string)

**Example:** `GET /aw-concepts/client/ABC`

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concepts for client 'ABC' retrieved successfully",
  "data": [
    {
      "id": 1,
      "requested_by": 101,
      "requested_date": "2025-11-12T00:00:00.000Z",
      "required_date": "2025-12-01T00:00:00.000Z",
      "artwork_type": "Digital",
      "jobtype": "New Design",
      "client_name": "ABC Corporation",
      "pattern_name": "Floral",
      "design_descript": "Logo design",
      "name": "ABC",
      "numbers": "005"
    }
  ],
  "count": 1
}
```

---

### 7. Update AW Concept
**PATCH** `/aw-concepts/:id`

Update an existing artwork concept. All fields are optional.

**URL Parameters:**
- `id`: Concept ID (number)

**Request Body (partial update):**
```json
{
  "jobtype": "Completed",
  "design_descripti": "Final design completed with client approval. Ready for production."
}
```

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concept updated successfully",
  "data": {
    "id": 1,
    "requested_by": 101,
    "requested_date": "2025-11-12T00:00:00.000Z",
    "required_date": "2025-12-01T00:00:00.000Z",
    "artwork_type": "Digital",
    "jobtype": "Completed",
    "previous_design": "N/A",
    "design_category": "Branding",
    "print_category": "Offset",
    "pattern_number": "PTN-001",
    "pattern_name": "Floral",
    "client_name": "ABC Corporation",
    "template_type": "Standard",
    "design_descript": "Logo design for new product line",
    "name": "ABC",
    "numbers": "005",
    "design_descripti": "Final design completed with client approval. Ready for production."
  }
}
```

---

### 8. Delete AW Concept
**DELETE** `/aw-concepts/:id`

Delete an artwork concept by ID.

**URL Parameters:**
- `id`: Concept ID (number)

**Example:** `DELETE /aw-concepts/1`

**Response (200 OK):**
```json
{
  "statusCode": 200,
  "message": "AW Concept deleted successfully"
}
```

**Error Response (404 Not Found):**
```json
{
  "statusCode": 404,
  "message": "AwConcept 999 not found",
  "error": "Not Found"
}
```

---

## Field Descriptions

| Field | Type | Max Length | Required | Description |
|-------|------|------------|----------|-------------|
| `id` | int | - | Auto | Primary key, auto-increment |
| `requested_by` | int | - | No | ID of person requesting the artwork |
| `requested_date` | datetime | - | No | Date when artwork was requested |
| `required_date` | datetime | - | No | Date when artwork is needed |
| `artwork_type` | varchar | 15 | No | Type of artwork (Digital, Print, etc.) |
| `jobtype` | varchar | 15 | No | Job type (New Design, Redesign, etc.) |
| `previous_design` | varchar | 15 | No | Reference to previous design |
| `design_category` | varchar | 15 | No | Category of design |
| `print_category` | varchar | 15 | No | Printing category |
| `pattern_number` | varchar | 15 | No | Pattern reference number |
| `pattern_name` | varchar | 15 | No | Name of pattern |
| `client_name` | text | - | No | Name of client |
| `template_type` | varchar | 15 | No | Template type used |
| `design_descript` | text | - | No | Design description |
| `name` | varchar | 3 | No | Short name/code |
| `numbers` | varchar | 3 | No | Number code |
| `design_descripti` | text | - | No | Additional design description |

---

## Testing with cURL

### Create Concept
```bash
curl -X POST http://localhost:3008/aw-concepts \
  -H "Content-Type: application/json" \
  -d '{
    "requested_by": 101,
    "required_date": "2025-12-01",
    "artwork_type": "Digital",
    "jobtype": "New Design",
    "client_name": "ABC Corporation",
    "pattern_name": "Floral",
    "design_descript": "Logo design"
  }'
```

### Get All
```bash
curl http://localhost:3008/aw-concepts
```

### Get by ID
```bash
curl http://localhost:3008/aw-concepts/1
```

### Update
```bash
curl -X PATCH http://localhost:3008/aw-concepts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "jobtype": "Completed"
  }'
```

### Delete
```bash
curl -X DELETE http://localhost:3008/aw-concepts/1
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid data |
| 404 | Not Found - Resource doesn't exist |
| 500 | Internal Server Error |
